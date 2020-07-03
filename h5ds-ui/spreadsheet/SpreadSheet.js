import React, { Component } from 'react';
import Spreadsheet from 'x-data-spreadsheet';
import zhCN from 'x-data-spreadsheet/dist/locale/zh-cn';
import { util } from '../../h5ds-ui';
import { message } from 'antd';
import './spreadsheet.less';

/**
 * props:
 * data
 * onChange
 * onSeek
 * type: chart || table
 * showToolbar
 */
class SpreadSheet extends Component {
  constructor(props) {
    super(props);
    this.id = 'id_' + util.randomID();
  }

  // 设置图表数据
  setChartData = () => {
    // 设置数据
    const data = this.xs.getData();
    const seriesData = [];
    const seriesKeys = [];
    const rows = Object.values(data[0].rows);
    let cellKey = null;
    rows.forEach((rowData, i) => {
      if (typeof rowData !== 'object') {
        return;
      }
      if (i === 0) {
        // {1: {text:'1月'}, 2: {text: '2月'}}
        cellKey = rowData.cells;
      } else {
        const rdata = [];
        seriesKeys.push(rowData.cells[0].text);
        Object.values(rowData.cells).forEach((d, index) => {
          if (index !== 0) {
            rdata.push({ value: d.text, name: cellKey[index].text });
          }
        });
        seriesData.push(rdata);
      }
    });
    this.seriesKeys = seriesKeys;
    this.seriesData = seriesData;
  };

  // 初始化图表数据
  initChartData = () => {
    this.seriesData = [];
    this.seriesKeys = [];
    this.props.data.option.series.forEach(d => {
      this.seriesData.push(util.cloneDeep(d.data));
      this.seriesKeys.push(d.name);
    });

    const { series } = this.props.data.option;
    // 设置标题
    if (series[0]) {
      series[0].data.forEach((d, i) => {
        this.xs.cellText(0, i + 1, d.name);
      });
    }
    series.forEach((datas, index) => {
      datas.data.forEach((d, i) => {
        if (i === 0) {
          this.xs.cellText(index + 1, 0, datas.name);
        }
        this.xs.cellText(index + 1, i + 1, d.value);
      });
    });
  };

  /**
   * 表格数据
   */
  initTableData = () => {
    this.props.data.forEach((rows, index) => {
      rows.forEach((d, i) => {
        this.xs.cellText(index, i, d.value);
      });
    });
  };

  componentDidMount() {
    Spreadsheet.locale('zh-cn', zhCN);
    this.xs = new Spreadsheet(document.getElementById(this.id), {
      showToolbar: this.props.showToolbar || false,
      view: {
        width: () => 1000,
        height: () => 600 + 41
      }
    });

    this.xs.on('change', d => {
      if (this.props.onSeek) {
        this.props.onSeek(d);
      }
    });

    // data 参数
    if (this.props.type === 'chart') {
      this.initChartData();
    }

    // dataSheet 参数
    if (this.props.type === 'table') {
      this.initTableData();
    }

    // 更新视图
    this.xs.reRender();

    console.log('this.xs', this.xs.getData());
  }

  componentWillUnmount() {
    // 关闭弹窗后，如果是图表数据，
    if (this.props.type === 'chart') {
      try {
        this.setChartData();
      } catch (e) {
        console.error(e);
        message.error('数据异常');
        return;
      }
      if (this.props.onChange) {
        this.props.onChange(this.seriesData, this.seriesKeys);
        this.seriesKeys = null;
        this.seriesData = null;
      }
    }

    if (this.props.type === 'table') {
      if (this.props.onChange) {
        this.props.onChange(this.xs.getData());
      }
    }

    this.xs = null;
  }

  render() {
    return <div className="ui-spreadsheet" id={this.id}></div>;
  }
}
export default SpreadSheet;

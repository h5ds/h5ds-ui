import React, { Component } from 'react';
import './tags.less';
import classNames from 'classnames';
import { Modal, Input, Table, message, Divider } from 'antd';
import EditCell from './EditCell';

/**
 * ajaxGet
 * ajaxUpdate
 * ajaxDelete
 * ajaxAdd
 * onChange
 * scope: system
 * type: image
 * canEdit: 可编辑
 */
class Tags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      canEdit: null,
      active: '', // 选中
      data: []
    };
  }

  /**
   * 获取标签
   */
  getTags = async (page = 1) => {
    const { ajaxGet, scope, type, ajaxGetEnd } = this.props;
    const res = await ajaxGet({ params: { materialType: type, scope, keyword: '', page, page_size: 999 } });
    if (res) {
      if (ajaxGetEnd) {
        ajaxGetEnd(res.data);
      }
      this.setState({ data: res.data });
    }
  };

  getData = () => {
    return this.state.data;
  };

  // 点击
  clickTag = elem => {
    this.setState({ active: elem.id });
    if (this.props.onChange) {
      this.props.onChange(elem);
    }
  };

  // 删除分类
  deleteTag = async elem => {
    await this.props.ajaxDelete(elem.id);
    message.success('删除成功！');
    this.getTags();
  };

  showModal = () => {
    this.setState({ show: true });
  };

  cancelModal = () => {
    this.setState({ show: false });
  };

  toEdit = d => {
    this.setState({ canEdit: d.id });
  };

  toSave = async d => {
    console.log(d);
    this.setState({ canEdit: null });
    await this.props.ajaxUpdate(d.id, d.categoryName);
    message.success('修改成功！');
  };

  addTags = async categoryName => {
    await this.props.ajaxAdd({ categoryName, materialType: this.props.type });
    message.success('添加成功！');
    this.getTags();
  };

  changeValue = (e, d) => {
    d.categoryName = e.target.value;
    this.forceUpdate();
  };

  componentDidMount() {
    this.getTags();
  }

  render() {
    const { data, active, show, canEdit } = this.state;

    return (
      <div className={classNames('ui-source-tags', this.props.className)}>
        {[{ categoryName: '全部', id: '' }, ...data].map((elem, index) => {
          return (
            <React.Fragment key={elem.id}>
              {index !== 0 ? <Divider style={{ background: 'rgba(0,0,0,.2)' }} type="vertical" /> : null}
              <section
                onClick={() => this.clickTag(elem)}
                className={classNames({
                  'ui-source-tags-active': elem.id === active
                })}
              >
                {elem.categoryName}
              </section>
            </React.Fragment>
          );
        })}
        {this.props.scope === 'user' || this.props.canEdit ? (
          <>
            <Divider style={{ background: 'rgba(0,0,0,.2)' }} type="vertical" />
            <a className="ui-source-tags-edit" onClick={this.showModal}>
              编辑分类
            </a>
            <Modal width={700} className="ui-modal" footer={null} visible={show} onCancel={this.cancelModal}>
              <div style={{ padding: 50 }}>
                <Input.Search onSearch={this.addTags} enterButton="添加分类" size="large" />
                <br />
                <Table
                  rowKey="id"
                  pagination={{
                    defaultCurrent: 1,
                    pageSize: 10
                  }}
                  dataSource={data.map(d => {
                    d.set = (
                      <EditCell
                        canEdit={canEdit}
                        data={d}
                        deleteTag={this.deleteTag}
                        toSave={this.toSave}
                        toEdit={this.toEdit}
                      />
                    );
                    return d;
                  })}
                  columns={[
                    {
                      title: '分类名称',
                      dataIndex: 'categoryName',
                      key: 'categoryName',
                      width: 420,
                      render: (name, d) => {
                        if (d.id === canEdit) {
                          return <Input value={name} onChange={e => this.changeValue(e, d)} />;
                        }
                        return name;
                      }
                    },
                    {
                      title: '操作',
                      dataIndex: 'set',
                      key: 'set'
                    }
                  ]}
                ></Table>
              </div>
            </Modal>
          </>
        ) : null}
      </div>
    );
  }
}

export default Tags;

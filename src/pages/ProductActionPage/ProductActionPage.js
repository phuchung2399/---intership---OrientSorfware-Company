import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { actAddProductRequest, actGetProductRequest, actUpdateProductRequest } from './../../actions/index';
import { connect } from 'react-redux';
import Swal from 'sweetalert';



class ProductActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            chkbStatus: ''
        };
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onEditProduct(id);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditing) {
            var { itemEditing } = nextProps;
            this.setState({
                id: itemEditing.id,
                txtName: itemEditing.name,
                txtPrice: itemEditing.price,
                chkbStatus: itemEditing.status
            });
        }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }


    onSave = (e) => {
        e.preventDefault();
        var { id, txtName, txtPrice, chkbStatus } = this.state;
        var { history } = this.props;
        var product = {
            id: id,
            name: txtName,
            price: txtPrice,
            status: chkbStatus
        };

        if (id && txtName != '' && txtPrice != '') {
            this.props.onUpdateProduct(product);
            Swal({
                title: 'Cập nhập thành công',
                icon: 'success'

            })
        } else if (txtName != '' && txtPrice != '') {
            this.props.onAddProduct(product);
            Swal({
                title: 'Cập nhập thành công',
                icon: 'success'

            })
        }
        else {
            Swal({
                title: 'Lỗi',
                icon: 'error'

            })
        }
        history.goBack();
    }




    render() {
        var { txtName, txtPrice, chkbStatus } = this.state;
        // const {itemEditing} = this.props;
        return (
            <div>
                <div>
                    <Link to="/" className="glyphicon glyphicon-circle-arrow-left btn btn-default mb-10"></Link>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">{this.state.id ? 'Chỉnh sửa' : 'Thêm sản phẩm'}</h3>
                    </div>
                    <div className="panel-body">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <form onSubmit={this.onSave}>
                                <div className="form-group">
                                    <label>Tên Sản Phẩm: </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="txtName"
                                        value={txtName}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Giá: </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="txtPrice"
                                        value={txtPrice}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Trạng Thái: </label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="chkbStatus"
                                            value={chkbStatus}
                                            onChange={this.onChange}
                                            checked={chkbStatus}
                                        />
                                        Còn Hàng
                        </label>
                                </div>
                                <a href="#">
                                    <button type="submit" className="glyphicon glyphicon-floppy-disk btn btn-default">  </button>
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        itemEditing: state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(actAddProductRequest(product));
        },
        onEditProduct: (id) => {
            dispatch(actGetProductRequest(id));
        },
        onUpdateProduct: (product) => {
            dispatch(actUpdateProductRequest(product));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
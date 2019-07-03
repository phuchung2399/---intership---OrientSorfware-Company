import React, { Component } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductList/ProductItem/ProductItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actFetchProductsRequest, actDeleteProductRequest } from './../../actions/index';
import Skeleton from "react-loading-skeleton";
import Swal from 'sweetalert';

class ProductListPage extends Component {

    componentDidMount() {
        this.props.fetchAllProducts();
    }

    onDelete = (id) => {
        this.props.onDeleteProduct(id);
        Swal({
            title: 'Xóa thành công',
            icon: 'success',
        })
    }

    render() {
        var { products } = this.props;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to="/product/add" className="btn btn-default mb-10">
                    Thêm Sản Phẩm
                </Link>
                <ProductList>
                    {this.showProducts(products) || <Skeleton count={5} />}
                </ProductList>
            </div>
        );
    }

    showProducts(products) {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                        onDelete={this.onDelete}
                    />
                );
            });
        }
        return result;
    }

}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: () => {
            dispatch(actFetchProductsRequest());
        },
        onDeleteProduct: (id) => {
            dispatch(actDeleteProductRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);

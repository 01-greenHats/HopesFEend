import React, {useEffect,useState} from 'react';
import './userCard.scss'


function UserCard(props){

    const [nameFilter,setnameFilter] = useState('All');

    console.log('props : ',props);

    function getLogoText(str) {
        var result = '';
        str.split(' ').forEach(word => {
            result = result + word[0];
        });
        console.log(result)
        return result;
    }

    function filterData(data){

    }
    return(
        <>
        <div className="filterSearchPanel"></div>
                <div className="userCardContainer">
        {
            props.data.map(item =>{
                return(
                    <div className="card">
                    {/* <img src="/w3images/team2.jpg" alt="John" style={{width:'100%'}}/> */}
                <div className='avotar'><h2>{getLogoText(item.name)}</h2></div>
                    <h1>{item.name}</h1>
                    <p className="title">CEO & Founder, Example</p>
                    <p>Harvard University</p>
                    <div style={{margin: '24px 0'}}>
                      <a href="#"><i className="fa fa-dribbble"></i></a> 
                      <a href="#"><i className="fa fa-twitter"></i></a>  
                      <a href="#"><i className="fa fa-linkedin"></i></a>  
                      <a href="#"><i className="fa fa-facebook"></i></a> 
                    </div>
                    <p><button>Contact</button></p>
                    </div>

                );
            })
        }
    </div>
        </>
    )


}
export default UserCard;

// const mapStateToProps = state => (
//     {        products: state.products.products,
//         }
// );

// const mapDispatchToProps = { addToCart, setProducts, updateInStock };

// export default connect(mapStateToProps, mapDispatchToProps)(ProductDtl);

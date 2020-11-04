import React, {useEffect,useState} from 'react';
import TextField from '@material-ui/core/TextField';
import './userCard.scss'


function UserCard(props){

    const [nameFilter,setNameFilter] = useState('All');
    const [nationalIdFilter,setNationalIdFilter] = useState('All');

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
        let result = [];
        data.forEach(item =>{
            // double filteration
            if(nameFilter !== 'All' && nationalIdFilter !== 'All'){

            }else if(nameFilter !== 'All' && item.name == nameFilter){

            }else if(nationalIdFilter !== 'All' && item.nationalNo == nationalIdFilter){

            }
            if(nameFilter == 'All'){
                result.push(item)
            }else{
                if(item.name == nameFilter){
                    result.push(item)
                }
            }
        });
        return result.length == 0 ? data : result;
    }
    return(
        <>
        <div className="filterSearchPanel">
            <fieldset>
                <legend>Search</legend>
            <TextField className='searchInput' onChange={(e)=>{setNameFilter(e.target.value)}} label="national Number" variant="outlined"/>
            <TextField className='searchInput' onChange={(e)=>{setNameFilter(e.target.value)}} label="name" variant="outlined"/>
            </fieldset>
        </div>
                <div className="userCardContainer">
        {
            filterData(props.data).map((item,idx) =>{
                return(
                    <div key={idx} className="card">
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

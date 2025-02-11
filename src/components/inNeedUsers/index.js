import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { setInNeedUsers } from '../../store/inNeedUser'
import { getInNeedUsersData,inNeedUserSignin } from '../../apiActions/users'
import { Link } from 'react-router-dom';
import UserCard from '../userCard'
import Footer from '../footer/index'


function TabPanel(props) {
    const { children, value, index, ...other } = props;
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    }));
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

const InNeedUsers = props => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    console.log('props in In need users>>',props);
 
    useEffect(async () => {

        let users = await getInNeedUsersData()
        console.log('users>>',users);
        props.setInNeedUsers(users.data);


    }, []);
    return(
        <>
        <UserCard data={props.inNeedUsers}/>
        {/* <Footer /> */}
        </>
    )
}
const mapStateToProps = state => (
    {
        inNeedUsers: state.inNeedUsers.inNeedUsers,
    }
);
const mapDispatchToProps = { setInNeedUsers };
export default connect(mapStateToProps, mapDispatchToProps)(InNeedUsers);
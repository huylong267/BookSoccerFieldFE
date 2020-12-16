/*eslint-disable*/
import React, { useState, useEffect } from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/iconsStyle.js";
import PrimarySearchAppBar from "components/AppBar/PrimarySearchAppBar.js"
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import Pagination from '@material-ui/lab/Pagination';
import Footer from 'components/Footer/Footer';
import logo from 'assets/img/sanbong.jpg';
import CustomCarousel from 'components/Carousel/CustomCarousel'


const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),

    },
    formControl: {
        margin: theme.spacing(2),
        minWidth: 150,
        marginBottom: 40
    },
    item: {
        padding: '50px !importtant'

    }
}));

export default function Detail(props) {

    const classes = useStyles();
    const [province, setProvince] = useState('');
    const [ward, setWard] = useState('');
    const [openProvince, setOpenProvince] = useState(false);
    const [openWard, setOpenWard] = useState(false);
    const [listField, setListField] = useState([
        {
            name: "Viettel1"
        },
        {
            name: "Viettel2"
        },
        {
            name: "Viettel3"
        }
    ])
    const handleChangeProvince = (event) => {
        setProvince(event.target.value);
    };

    const handleChangeWard = (event) => {
        setWard(event.target.value);
    };
    const handleCloseProvince = () => {
        setOpenProvince(false);
    };

    const handleOpenProvince = () => {
        setOpenProvince(true);
    };

    const handleCloseWard = () => {
        setOpenWard(false);
    };

    const handleOpenWard = () => {
        setOpenWard(true);
    };

    return (
        <GridContainer>

            <GridItem xs={12} sm={12} md={12}>
                <PrimarySearchAppBar />
            </GridItem>


            <GridItem xs={2} sm={2} md={2} ></GridItem>


            <GridItem xs={8} sm={8} md={8} >

                <GridContainer
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={2} style={{ padding: "20px" }}
                  
                >
                   <CustomCarousel></CustomCarousel>

                </GridContainer>

            </GridItem>

            <GridItem xs={2} sm={2} md={2} ></GridItem>

            <GridItem xs={12} sm={12} md={12} >
                <GridContainer
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={2} style={{ padding: "20px" }}

                >
                    <Pagination count={10} />
                </GridContainer>
            </GridItem>
            <GridItem xs={12} sm={12} md={12} >
                <GridContainer
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={2} style={{ padding: "20px" }}

                >
                    <Footer></Footer>
                </GridContainer>
            </GridItem>
        </GridContainer>
    );
}
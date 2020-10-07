import React from 'react';
import axios from 'axios';

export const fetchShow = () => {
    return axios
        .get("https://api.tvmaze.com/singlesearch/shows?q=stranger-thing&embed=episodes")
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log("error fetching data, err: ", err.message);
            return err;
        });
};
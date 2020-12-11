import * as t from '../types';
import axios from 'axios';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const getBooks = (category, country) => async (dispatch, getState) => {
  console.log(category, country);
  let data;
  if (country) {
    data = await axios
      .get(
        `${process.env.REACT_APP_API}/books?website=مركز دراسات ثقافات المتوسط&category=${category}&country=${country}`,
        //   { website: 'المتوسط' },
        { headers }
      )
      .then(res => {
        console.log(res);
        return res;
      })
      .catch(err => {
        console.log(err);
      });
  } else {
    data = await axios
      .get(
        `${process.env.REACT_APP_API}/books?website=مركز دراسات ثقافات المتوسط&category=${category}`,
        //   { website: 'المتوسط' },
        { headers }
      )
      .then(res => {
        console.log(res);
        return res;
      })
      .catch(err => {
        console.log(err);
      });
  }

  return data;
};

export const getBook = id => async (dispatch, getState) => {
  const data = await axios
    .get(
      `${process.env.REACT_APP_API}/books/${id}`,
      //   { website: 'المتوسط' },
      { headers }
    )
    .then(res => {
      //   console.log(res);
      return res;
    })
    .catch(err => {
      console.log(err);
    });
  return data;
};

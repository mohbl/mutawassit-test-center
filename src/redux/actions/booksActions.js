import * as t from '../types';
import axios from 'axios';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const getBooks = (category, country, translate) => async (
  dispatch,
  getState
) => {
  let data;
  if (country && translate) {
    data = await axios
      .get(
        `${process.env.REACT_APP_API}/books?website=مركز دراسات ثقافات المتوسط&category=${category}&country=${country}&translate=${translate}`,
        //   { website: 'المتوسط' },
        { headers }
      )
      .then(res => {
        return res;
      })
      .catch(err => {});
  } else if (translate) {
    data = await axios
      .get(
        `${process.env.REACT_APP_API}/books?website=مركز دراسات ثقافات المتوسط&category=${category}&translate=${translate}`,
        //   { website: 'المتوسط' },
        { headers }
      )
      .then(res => {
        return res;
      })
      .catch(err => {});
  } else if (country) {
    data = await axios
      .get(
        `${process.env.REACT_APP_API}/books?website=مركز دراسات ثقافات المتوسط&category=${category}&country=${country}`,
        //   { website: 'المتوسط' },
        { headers }
      )
      .then(res => {
        return res;
      })
      .catch(err => {});
  } else {
    data = await axios
      .get(
        `${process.env.REACT_APP_API}/books?website=مركز دراسات ثقافات المتوسط&category=${category}`,
        //   { website: 'المتوسط' },
        { headers }
      )
      .then(res => {
        return res;
      })
      .catch(err => {});
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
      return res;
    })
    .catch(err => {});
  return data;
};

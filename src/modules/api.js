import axios from 'axios';

import { filePath } from './util';

export const bannerApi = async (id) => {
  try {
    const { data } = await axios.get(process.env.REACT_APP_BANNER_URL + '?id=' + id);
    const { content: contents, files } = data;
    const rs = contents.split('^^').map((v, i) => {
      let [title, price, content, link, pos] = v.split('|');
      return {
        title,
        price,
        content,
        link,
        pos,
        file: filePath(files[i]),
      };
    });
    return rs;
  } catch (err) {
    console.log(err);
  }
};

export const prdApi = async (options = {}) => {
  try {
    let { cid, field, search, sort, page } = options;
    let query = '?';
    if (cid) query += '&cid=' + cid;
    if (field) query += '&field=' + field;
    if (search) query += '&search=' + search;
    if (sort) query += '&sort=' + sort;
    if (page) query += '&page=' + page;
    const { data } = await axios.get(process.env.REACT_APP_PRD_URL + query);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const rideApi = async (id) => {
  try {
    const { data } = await axios.get(process.env.REACT_APP_BANNER_URL + '?id=' + id);
    const { content: contents, files } = data;
    const rs = contents.split('^^').map((v, i) => {
      let [id, title, content] = v.split('|');
      return { id, title, content, src: filePath(files[i]) };
    });
    return rs;
  } catch (err) {
    console.log(err);
  }
};

export const instaApi = async (id) => {
  try {
    const { data } = await axios.get(process.env.REACT_APP_BANNER_URL + '?id=' + id);
    const { content: contents, files } = data;
    const rs = contents.split('^^').map((v, i) => {
      let [id, star, content, writer] = v.split('|');
      return { id, star, content, writer, src: filePath(files[i]) };
    });
    return rs;
  } catch (err) {
    console.log(err);
  }
};

export const brandApi = async (id) => {
  try {
    const { data } = await axios.get(process.env.REACT_APP_BRAND_URL + '?id=' + id);
    const list = data.map((v) => {
      v.src = filePath(v.BoardFiles[0].saveName);
      delete v.BoardFiles;
      return v;
    });
    return list;
  } catch (err) {
    console.log(err);
  }
};

export const emailApi = async (email) => {
  try {
    const { data } = await axios.get(process.env.REACT_APP_SENDMAIL_URL + '?email=' + email);
    return data;
  } catch (err) {
    console.log(err);
  }
};

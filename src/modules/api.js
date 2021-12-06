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
    let { cid, grp, field, search, sort } = options;
    let query = '?';
    if (cid) query += '&cid=' + cid;
    if (grp) query += '&grp=' + grp;
    if (field) query += '&field=' + field;
    if (search) query += '&search=' + search;
    if (sort) query += '&sort=' + sort;
    console.log(query);
    const { data } = await axios.get(process.env.REACT_APP_PRD_URL + query);
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

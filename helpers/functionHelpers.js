/* eslint-disable */

function mapBookResponseToObjet(bookResponse = []) {
  const newBookList = [];
  bookResponse = Array.from(bookResponse);
  bookResponse.forEach((book) => {
    const bfields = book.fields,
      newbookObj = {};
    for (const prop in bfields) {
      if (prop === 'bookImage') {
        newbookObj[prop] = {
          title: bfields[prop].fields.title,
          url: bfields[prop].fields.file.url,
          contentType: bfields[prop].fields.file.contentType
        };
      } else if (prop === 'description') {
        newbookObj[prop] = bfields[prop].content[0].content[0].value;
      } else {
        newbookObj[prop] = bfields[prop];
      }
    }
    newBookList.push(newbookObj);
  });
  return newBookList;
}

export default {
  mapBookResponseToObjet
};

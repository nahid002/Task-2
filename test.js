// 1

query {
    Book(
        where: { Country { _eq: "Bangladesh" }}
    ) {
    Book
}
  };


  //2

  query {
    PublishedBook(
        where: { author_id: { _eq: "J.K Rowling" } }
    ) {
        author_id
        publication_date
    }
}
# nifty_blog_store_backend
A blogging backend helps to create blogs.

<div style="display : flex; justify-content:center"><img   src="https://i.ibb.co/Ryd3J1M/Blog-post.gif"/><div/>
  Different routes to hit from the frontend to talk with backend.
 
 1. https://blog-backned.herokuapp.com/all --> To get all the blogs. (req: GET)
 2. https://blog-backned.herokuapp.com/id --> To get a particular blog. (req : GET,  body : {id : [id]})
 3. https://blog-backned.herokuapp.com/author --> To search blog with provided author. (req : GET, body : {author :[author]})
 4. https://blog-backned.herokuapp.com/title --> To search blog with provided title. (req : GET, body : {title :[title]})
 5. https://blog-backned.herokuapp.com/add --> To add new blog to the backend. (req : POST, body : {{   
                                                                                                      "id" : 1,
                                                                                                     "title": "eg",
                                                                                                      "author":"eg",
                                                                                                      "description": "eg",
                                                                                                      "labels": "eg",
                                                                                                      "likes": 1
                                                                                                  }})
 6. https://blog-backned.herokuapp.com/like --> To increase the count of likes. (req : PATCH, body : {id :[id]})
 
  


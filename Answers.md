1.  Explain the differences between `client-side routing` and `server-side routing`.
Server-side routing means that a new page or route is loaded by the server. When you click on the link, it refreshes the whole page. That means a new get request is sent to the server which responds with a new document.  Click -> refresh -> new doc. A server side route is great for seo, but it takes a while longer for the page to load because it's loading a whole new page.

Client side routing means loading the whole shebang in your browser--the route is handled internally by the JS that is loaded on the page. This means you don't have to load a new document when you click on links, and the animations and the transitions are smooth. It's not as great for when google wants to grab data from the website, and plus, you have that slow initial load. 

2.  What does HTTP stand for?
HYPERTEXT TRANSFER PROTOCOL

3.  What does CRUD stand for?
[C]reate: put/post
[R]ead (retrieve): get
[U]pdate (modify): put/post/patch
[D]elete: delete

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
Oh, above.

5.  Mention three tools we can use to make AJAX requests
axios, fetchAPI, jQuery

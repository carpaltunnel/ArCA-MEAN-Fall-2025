# HTML5 Storage

## Cookies
Cookies are small (<4KB) key value pairs that are transmitted from a browser to the remote host on every request. Cookies are not new to HTML5 and have been in use for many, many years.  They are still available but their use has diminished as newer, better, storage solutions have been implemented.  Cookies are bound to a specific domain and are sent on every request that matches the URL.  This can lead to unintentional consequences if a user has multiple windows open to the same domain.

## Session Storage
Session storage works similarly to cookies except which window is a unique "session" with the remote host.  Therefore, changes to session storage in window #1 should not affect session storage in window #2.  The session storage persists while the window is open and is cleared when the window is closed.  Session storage, once utilized, is available to any page on the associated domain/website accessed in the current window.

**Take note** that everything stored in session storage is stored as a string and must be converted to and from a proper type when working with it to avoid type conversion accidents.  This includes Objects and Arrays if you choose to store them in session storage.  They should be stringified for proper storage.

```javascript
<script type = "text/javascript">
  if ( sessionStorage.sessionPageLoads ) {
    sessionStorage.sessionPageLoads = Number(sessionStorage.sessionPageLoads) + 1;
  } else {
    sessionStorage.sessionPageLoads = 1;
  }
</script>
```

## Local Storage
The purpose of local storage is to store data that is accessible across multiple windows and multiple sessions for long periods of time.  Local storage set on a particular site would be available on all windows open to that site and would not change if all windows were closed and reopened at a later time.

This is useful for storing large amounts of data on the client side so it does not need to be continually queried and retransmitted from the server side.  In this manner, it works similar to a cache that can be incrementally updated with changes from the server side.

```javascript
<script type = "text/javascript">
  if ( localStorage.totalPageLoads ) {
    localStorage.totalPageLoads = Number(localStorage.totalPageLoads) + 1;
  } else {
    localStorage.totalPageLoads = 1;
  }
</script>
```

## Exercise
TODO : 
TODO : 
TODO : Using the previous lab (HTML Intro), store the user supplied data in Local Storage when the user submits the form.  Automatically complete the form with the data from Local Storage on load

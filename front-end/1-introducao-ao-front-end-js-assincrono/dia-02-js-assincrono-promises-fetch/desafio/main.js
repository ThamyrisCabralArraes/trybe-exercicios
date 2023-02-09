import './style.css';

import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from './utils/updateUI';

const usersSelect = document.querySelector('#users-select');

const USERS_API = 'https://dummyjson.com/users';
fetch(USERS_API)
  .then((response) => response.json())
  .then((data) => {
    const { users } = data;

    fillUsersSelect(users);
  });

usersSelect.addEventListener('change', (e) => {
  clearPageData();
  fetch(`https://dummyjson.com/posts/user/${e.target.value}`)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      const { posts } = data;
      fillPosts(posts);

      fetch(`https://dummyjson.com/posts/${posts[0].id}/comments`)
        .then((response) => response.json())
        .then((data) => {
          const { comments } = data;

          fillFeaturedPostComments(comments);
        })
        .catch((error) => fillErrorMessage(error.message));
    })
    .catch((error) => fillErrorMessage(error.message));
});

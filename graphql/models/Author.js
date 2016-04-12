import { commits } from '../../github-commits';

let Author = {
  parseOutAuthorsFromCommits: (arr) => {
    let authors = {};
    let authorArr = [];

    arr.forEach((commit) => {
      if(!authors.hasOwnProperty(commit.commit.author.id)) {
        authors[commit.commit.author.id] = {
          name: commit.commit.author.name,
          email: commit.commit.author.email,
          id: commit.author.id,
          login: commit.author.login,
          commits: [
            commit
          ]
        };

        return;
      }

      authors[commit.commit.author.id].commits.push(commit);
      return;
    });

    for(let author in authors) {
      if(authors.hasOwnProperty(author)) {
        authorArr.push(authors[author]);
      }
    }

    return authorArr;
  },

  fetchAll: () => {
    return Author.parseOutAuthorsFromCommits(commits);
  }
};

export default Author;

import { commits } from '../../github-commits';

let Commit = {
  processCommits: (arr) => {
    return arr.map((commit) => {
      return {
        sha: commit.sha,
        url: commit.url,
        author: {
          name: commit.commit.author.name,
          email: commit.commit.author.email,
          id: commit.author.id,
          login: commit.author.login
        },
        time: commit.commit.author.date,
        message: commit.commit.message
      }
    });
  },

  fetchBySha: (root, { sha }) => {
    return Commit.processCommits(commits).find((item) => {
      return item.sha === sha;
    });
  },

  fetchAll: () => {
    return Commit.processCommits(commits);
  }
};

export default Commit;

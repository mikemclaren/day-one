import { commits } from '../../github-commits';

let Commit = {
  processCommits: (arr) => {
    return arr.map((commit) => {
      return {
        url: commit.url,
        author: commit.commit.author.name,
        time: commit.commit.author.date,
        message: commit.commit.message
      }
    });
  },

  fetchAll: () => {
    return Commit.processCommits(commits);
  }
};

export default Commit;

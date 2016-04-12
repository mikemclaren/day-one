import request from 'request-promise';
let commits = [];

export async function grabGithubCommits() {
  const response = await request({
    uri: 'https://api.github.com/repos/mikemclaren/day-one/commits',
    headers: {
      'user-agent': 'mikemclaren'
    }
  });
  commits = JSON.parse(response);
};

export { commits };

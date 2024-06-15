const action = (type: string) => {
  switch (type) {
    case "WatchEvent":
      return "starred a repository";
    case "CreateEvent":
      return "created a repository";
    case "ForkEvent":
      return "forked a repository";
    case "PushEvent":
      return "pushed to a repository";
    case "PullRequestEvent":
      return "opened a pull request";
    case "IssuesEvent":
      return "opened an issue";
    case "IssueCommentEvent":
      return "commented on an issue";
    case "PullRequestReviewEvent":
      return "reviewed a pull request";
    case "PullRequestReviewCommentEvent":
      return "commented on a pull request";
    case "DeleteEvent":
      return "deleted a branch or tag";
    case "ReleaseEvent":
      return "released a version";
    case "PublicEvent":
      return "made a repository public";
    case "MemberEvent":
      return "added a collaborator to a repository";
    case "CommitCommentEvent":
      return "commented on a commit";
    case "GollumEvent":
      return "updated the wiki";
    case "IssuesEvent":
      return "closed or reopened an issue";
    case "ProjectCardEvent":
      return "created, updated, or deleted a project card";
    case "ProjectColumnEvent":
      return "created, updated, or deleted a project column";
    case "ProjectEvent":
      return "created, updated, or deleted a project";
    case "StatusEvent":
      return "changed the status of a commit";
    case "TeamAddEvent":
      return "added a repository to a team";
    case "SponsorshipEvent":
      return "sponsored a user";
    default:
      return "performed an action";
  }
};

export default action;

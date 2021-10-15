/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
let gitDefinition = "git is a way to manage projects, and project versions. without having 1 billion files on your computer";
//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
let gitHubDefinition = "github is a storage place where you can push git repositories from your computer to online. It makes it easier for teams to work on projects, and is a place where others can see your code";
//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE
let init = {
    description: "creates a new repository... if one doesn't exist. in the current directory you are in",
    code: "git init"
};

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE
let clone = {
    description: "clones a repository (copies a repository) (from a url, or flag) into your current working directory, or to another url, or location",
    code: "git clone https://github.com/tbpatj/js-basics-1"
};
//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE
let status = {
    description: "the status command tells you what has been added, or what files have been changed since the last commmit",
    code: "git status"
};
//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE
let add = {
    description: "adds a file to the current commit",
    code: "git add gitInfo.js"
};
//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE
let commit = {
    description: `creates a new "version" of your project, it saves what you have done, and files it accordingly`,
    code: `git commit -m "just about to finish gitInfo.js"`
};

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE
let push = {
    description: `this sends all the stuff you have commited, to a another computer, or server, such as github`,
    code:  `git push -u origin main` //or just git push if you have already pushed initially
};
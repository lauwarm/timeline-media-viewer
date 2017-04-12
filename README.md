# overview
this is a nwjs app to view media files (images, gifs, ...) from social media services (twitter, tumblr, ...)

# requirements and installation

## from source
+ download [this project] (https://gitlab.com/lauwarm/timeline-media-viewer/repository/archive.zip?ref=master)
+ download [nwjs] (http://nwjs.io/)
+ download and install [node.js] (https://nodejs.org/en/)
+ download and install [yarn] (http://yarnpkg.com/)
+ open a terminal, navigate to the project folder and `yarn` all dependent modules

## packed release
+ soonTM

## oauth credentials
+ register an app with the social media service of your choice
+ get the consumer key and consumer secret

## final phase
+ navigate to the project folder
+ edit the `config/_config.js` file with your tokens
+ start the app `path/to/nw /path/to/app/`
+ :cake:

# keyboard shortcuts
+ s - display first media file
+ f - show next media file
+ d - show previous media file
+ c - copy current link to clipboard
+ r - reload
+ e - close media file

# miscellaneous
+ [issues] (https://gitlab.com/lauwarm/timeline-media-viewer/issues)
+ [milestones] (https://gitlab.com/lauwarm/timeline-media-viewer/milestones)
+ social media service of your choice means twitter/tumblr only at the moment :sweat:

# notes
+ due to the fact that one can read the oauth secret keys i cannot provide you with my own
+ oauth2 should make it possible to implement sign-in-buttons

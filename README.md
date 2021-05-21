# Folder Mania

A virtual folder tree visualizer. Live at [https://folder-mania.netlify.app](https://folder-mania.netlify.app).

## About the build

This is an front end application for the virtual folder tree structure, ['node-virtua-folder'](https://node-virtual-folder.herokuapp.com). The idea was to create a full stack virtual folder tree that can be updated.

The tools I used for this are React, React context API, axios, Fontawesome library, and react-toggle for the small theme toggle button.

## Functionality

### Get(read) all folders
When the app renders, a root folder appears which contanis all the folders inside. The component re-renders everytime a folder is added or removed.

### Insert(create) a folder
The InsertFolderForm component is added for inserting a folder to the tree with a custom title. This component renders using React's useState method.

### Remove(delete) a folder
Much like the InsertFolderForm component, the DeleteFolderForm component is added for deleting a folder from the tree.

## Styles
I used custom CSS for all the components.

### Theme
I wanted to create 2 themes which would look like a windows environment and a terminal environment. I used custom JavaScript to update the CSS root variables for changing the theme. This allowed me to keep my theme changer component clean from the other components.

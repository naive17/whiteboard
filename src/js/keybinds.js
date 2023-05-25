/* -----------
 KEYBINDINGS
----------- */

//> defmod is "command" on OS X and "ctrl" elsewhere
//Advanced Example: 'defmod-k j' -> For this to fire you have to first press both ctrl and k, and then j.

const keybinds = {
    // 'key(s)' : 'function',
    "defmod-z": "undoStep",
    "defmod-y": "redoStep"
};

export default keybinds;

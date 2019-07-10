# Reindent on Save #

A simple VSCode formatter extension that wraps `editor.action.reindentlines`.

This allows things like formatting on save and "Format Document".

Based on example code by [jrieken]( https://github.com/jrieken/vscode-formatter-sample).

This extension is language agnostic.  So long as your language extension has indentation rules this should work for you.

Tested against VS Code 1.35.1

## Reindent only for Some File Types ##

If you wanted to switch from reindenting on save globally to reindenting only for Ruby files you could make the following change to your `settings.json`.

To go from this:
```
{
    "a setting": 42,
    "another example setting": "Hello, world!",
    "editor.formatOnSave": true
}
```

to:
```
{
    "a setting": 42,
    "another example setting": "Hello, world!",
    "[ruby]": {
        "editor.formatOnSave": true
    }
}
```


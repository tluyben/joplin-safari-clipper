# Joplin Safari Web Clipper

## Introduction

There is a partial automated way of creating a Safari extension from a Chrome one: 

- https://iboysoft.com/news/convert-chrome-extension-to-safari.html
- https://developer.apple.com/documentation/safariservices/safari_web_extensions/converting_a_web_extension_for_safari

Read both articles before proceeding. 

## Requirement

- Mac OS X 13.0
- XCode (latest)

## Conversion

Command to run for the current version of the Chrome : 

```
xcrun safari-web-extension-converter ~/Library/Application\ Support/Google/Chrome/Default/Extensions/alofnhikmmkdbbbgpnglcpdollgjjfek/2.8.1_0
```

Repository with the conversion: https://github.com/tluyben/joplin-safari-clipper

## Next steps  

- Figure out how to add sign the extension for deployment 





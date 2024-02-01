#!/usr/bin/env python3

# Define the content of index.html
html_content = """
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <title>Document</title>
  </head>
  <body>
    <script src="script.js"></script>
  </body>
</html>
"""

# Define the content of styles.css
css_content = """
*, ::before, ::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
"""

# Define the content of script.js
js_content = """
"""

# Create the files with the content
with open('index.html', 'w') as f:
    f.write(html_content)

with open('styles.css', 'w') as f:
    f.write(css_content)

with open('script.js', 'w') as f:
    f.write(js_content)

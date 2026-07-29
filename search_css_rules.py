import re

css_path = r"d:\codes\dental-main\dental-main\assets\css\dranubhuti.css"
with open(css_path, "r", encoding="utf-8") as f:
    content = f.read()

# Let's find every media query and print rules inside them that contain home-hero_image or hero-image_wrap
# We can also do a broad regex to print any lines in the CSS matching those classes.
lines = content.split('\n')
for idx, line in enumerate(lines):
    if 'home-hero_image' in line or 'hero-image_wrap' in line:
        print(f"Line {idx+1}: {line}")
        # Print a few lines before and after
        start = max(0, idx - 4)
        end = min(len(lines), idx + 5)
        for j in range(start, end):
            print(f"  {j+1}: {lines[j]}")
        print("-" * 30)

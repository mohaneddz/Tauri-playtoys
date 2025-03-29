# python icon-creator.py icon.png 
from PIL import Image
import os
import sys

def create_variations(image_path):
    sizes = [
        (32, 32), (128, 128), (256, 256),
        (256, 512), (44, 44), (71, 71),
        (89, 89), (107, 107), (142, 142),
        (150, 150), (284, 284), (310, 310),
        (30, 30)
    ]
    names = [
        "32x32.png", "128x128.png", "icon.png", 
        "128x128@2x.png", "Square44x44Logo.png", "Square71x71Logo.png", 
        "Square89x89Logo.png", "Square107x107Logo.png", "Square142x142Logo.png", 
        "Square150x150Logo.png", "Square284x284Logo.png", "Square310x310Logo.png", 
        "Square30x30Logo.png"
    ]
    
    base_name = os.path.splitext(os.path.basename(image_path))[0]
    output_dir = os.path.join(os.path.dirname(image_path), base_name + "_icons")
    os.makedirs(output_dir, exist_ok=True)
    
    img = Image.open(image_path).convert("RGBA")
    
    for size, name in zip(sizes, names):
        img_resized = img.resize(size, Image.LANCZOS)
        img_resized.save(os.path.join(output_dir, name))
    
    # Create .ico (multi-size icon for Windows)
    img.save(os.path.join(output_dir, "icon.ico"), format="ICO", sizes=[(32, 32), (128, 128), (256, 256)])
    
    # Create .icns (macOS icon format)
    icns_path = os.path.join(output_dir, "icon.icns")
    img.resize((1024, 1024), Image.LANCZOS).save(os.path.join(output_dir, "icon_1024x1024.png"))
    os.system(f"iconutil -c icns {output_dir} --output {icns_path}")
    
    print(f"Icons saved in {output_dir}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python generate_icons.py <image_path>")
    else:
        create_variations(sys.argv[1])

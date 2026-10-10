import os
from rembg import new_session, remove
from PIL import Image

OUT_DIR = os.path.abspath(os.path.join("public", "assets"))
os.makedirs(OUT_DIR, exist_ok=True)

print("Initializing u2net session (already downloaded)...")
session = new_session("u2net")

print("Opening pic.png...")
img = Image.open(r"d:\Portfolio_subrata_new\pic.png")

print("Removing background with u2net...")
cutout = remove(img, session=session)

cutout_path = os.path.join(OUT_DIR, "portrait_cutout.png")
cutout.save(cutout_path, format="PNG")
print(f"Saved {cutout_path} ({os.path.getsize(cutout_path)} bytes)")

# Create responsive WebP portraits
orig_w, orig_h = cutout.size
for target_w in [1100, 720, 420]:
    target_h = int(orig_h * (target_w / orig_w))
    resized = cutout.resize((target_w, target_h), Image.Resampling.LANCZOS)
    webp_path = os.path.join(OUT_DIR, f"portrait-{target_w}.webp")
    resized.save(webp_path, format="WEBP", quality=88, method=6)
    print(f"Saved {webp_path} ({os.path.getsize(webp_path)} bytes)")

print("All Subrata portrait assets successfully generated!")

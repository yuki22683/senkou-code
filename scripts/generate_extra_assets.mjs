import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const cookie = "eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..kqbGbm6FauVgQBqU.IR4c0qI9zXHkHptyP6tP0eCscJYuI3DKJoumNNaf1-eYXQupi45Y5swhL34CgvUuOsvWVgIviLSbZlrnFmREmfAXXyq4kZPOxp9lUJWTz0cs89Q4c8XwCQXkjYb4KMjrP4UupQ3f_-o83ksiXHqjzPFZtp6MFZ40QH88u7Xp-Pn0tLG6pbct1fbUHHmaU6wEdPdzWKCZoXiuuj-M7UtOatV5Aq2TUH7KdkVYtSSjhs4UGYDjtYZbHSxi1xdL_iPB9hkk0u5PnFpxCV0SRe2IZ1R5qS94zVo2scswSs65XeDHBc88Gvi4M6Z4GCaY-yH11qNzk4-y2w0SMBNI6d7NIQjKokft8sMUnt9SxPs7bDvM4wH_2WE4dKWZcDmdaV-kc5vf-4T8v_K3EAFKH9gTaAUozJ1V8F9jNsKHb0eMREm8cXi9zyf6zXE4mjoBw5_C1IEcvb9f6CZs0AaGlvbj5gfLfDx85Qo0MQKWU9cyxShteQN5AWgd8df_10Wuh5zfkkcRy60aHHNVxnF_nP43NPisx3mudOggWUwSpCIrf0glRttOWIPCQlCrVARv9l3Iv3u1NNDgvyCFzIOuPDXvk6aNo6AbAY0akj1k_0tEBsfbB03Oz8WuvkK1fAmVXjFVa3tps9I0oqkwUJRJNmZLf_TKkzf7MvKo3dnKDdvc_uBmRDvlF_tfispNdWcdAPe4gCNvdZxStAFYuoc8wg5G6x0ipmnxgSVQ7_6B6lgKzdXsS74MunPaucKvkXEiTnVgll2n8s5mATqvQa95wdsvMp6VWYFTTIUW2Zlp5EHbyjy5wvHbI-CXhOWAlVlro5o4gPt-o1n_7bfJEI4byU_pehIPORYYoDzEOdUioCeq5j3h2-L2K6z2CNY-oW-VGLDAGm7V3xJeD39IoY8N6w6OIKQwQvyWz9Ybmz7MfLq14zrJ3sdStAq0XUoAg6TX9iiNO_A9BPKOdje87nwWIMJF7w.QkgvDHgp26SMB9xGa2Qg2A";
const outputDir = "public/illustrations/common";

const assets = [
  { name: 'mountain_climb.png', prompt: "A stylized 3D mountain with a path to the summit, representing progression and level up, clean minimalist style, white background" },
  { name: 'ocean_wave.png', prompt: "A sleek 3D ocean wave with glowing blue edges, representing data streams and flow, clean minimalist style, white background" },
  { name: 'solar_system.png', prompt: "A 3D model of planets orbiting a sun, representing an ecosystem or environment, clean minimalist style, white background" },
  { name: 'telescope.png', prompt: "A modern 3D telescope pointing at a star, representing observation and future vision, clean minimalist style, white background" },
  { name: 'diamond_jewelry.png', prompt: "A sparkling 3D diamond, representing value and unique objects, clean minimalist style, white background" },
  { name: 'bridge_connection.png', prompt: "A 3D arch bridge connecting two points, representing links and joins, clean minimalist style, white background" },
  { name: 'anchor_safety.png', prompt: "A heavy 3D anchor, representing stability and persistence, clean minimalist style, white background" },
  { name: 'hot_air_balloon.png', prompt: "A colorful 3D hot air balloon rising up, representing scaling and high-level concepts, clean minimalist style, white background" },
  { name: 'magnifying_glass_plus.png', prompt: "A 3D magnifying glass with a plus sign, representing zoom and deep details, clean minimalist style, white background" },
  { name: 'padlock_open.png', prompt: "An open 3D silver padlock, representing public access and unlocking, clean minimalist style, white background" },
  { name: 'sand_timer.png', prompt: "A 3D hourglass with glowing sand falling, representing duration and time, clean minimalist style, white background" },
  { name: 'light_bulb_off.png', prompt: "A 3D lightbulb that is turned off, representing hidden or unknown values, clean minimalist style, white background" },
  { name: 'dna_structure.png', prompt: "A 3D stylized DNA helix, representing base classes and types, clean minimalist style, white background" },
  { name: 'microscope_lens.png', prompt: "A close-up 3D view through a microscope lens, representing low-level details, clean minimalist style, white background" },
  { name: 'world_globe.png', prompt: "A sleek 3D globe of the Earth, representing global and universal scope, clean minimalist style, white background" },
  { name: 'map_treasure.png', prompt: "A 3D rolled parchment map with an X mark, representing discovery and finding, clean minimalist style, white background" },
  { name: 'compass_rose.png', prompt: "A stylish 3D compass rose symbol, representing direction and routing, clean minimalist style, white background" },
  { name: 'shield_gold.png', prompt: "A glowing 3D golden shield, representing final protection and constants, clean minimalist style, white background" },
  { name: 'key_silver.png', prompt: "A 3D silver key, representing private access and security, clean minimalist style, white background" },
  { name: 'hammer_wrench.png', prompt: "A 3D hammer and wrench crossed, representing build tools and utilities, clean minimalist style, white background" },
  { name: 'cogwheel_large.png', prompt: "A single large 3D metallic cogwheel, representing the core engine, clean minimalist style, white background" },
  { name: 'feather_pen.png', prompt: "A 3D classic feather pen and ink, representing writing and metadata, clean minimalist style, white background" },
  { name: 'paper_clip.png', prompt: "A shiny 3D paper clip, representing attachments and references, clean minimalist style, white background" },
  { name: 'calculator_retro.png', prompt: "A chunky 3D retro calculator, representing math and logic, clean minimalist style, white background" },
  { name: 'light_beam.png', prompt: "A focused 3D beam of light, representing speed and photons, clean minimalist style, white background" },
  { name: 'battery_charging.png', prompt: "A 3D battery with a lightning bolt, representing dynamic state and power, clean minimalist style, white background" },
  { name: 'robot_arm.png', prompt: "A 3D industrial robot arm performing a task, representing automation, clean minimalist style, white background" },
  { name: 'camera_lens.png', prompt: "A sleek 3D camera lens, representing snapshots and capturing data, clean minimalist style, white background" },
  { name: 'gift_box.png', prompt: "A 3D colorful gift box with a ribbon, representing packages and results, clean minimalist style, white background" },
  { name: 'trophy_gold.png', prompt: "A shiny 3D golden trophy, representing completion and success, clean minimalist style, white background" },
];

for (const asset of assets) {
  const targetPath = path.join(outputDir, asset.name);
  if (fs.existsSync(targetPath)) continue;
  console.log(`Generating: ${asset.name}`);
  try {
    const cmd = `imagefx --cookie "${cookie}" --prompt "${asset.prompt}" --count 1 --dir "${outputDir}" --ratio IMAGE_ASPECT_RATIO_SQUARE`;
    execSync(cmd);
    const files = fs.readdirSync(outputDir).filter(f => f.startsWith('image-') && f.endsWith('.png'));
    if (files.length > 0) {
      const newest = files.sort().reverse()[0];
      fs.renameSync(path.join(outputDir, newest), targetPath);
    }
  } catch (err) {
    console.error(`Failed ${asset.name}: ${err.message}`);
  }
}

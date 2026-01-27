import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const cookie = "eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..kqbGbm6FauVgQBqU.IR4c0qI9zXHkHptyP6tP0eCscJYuI3DKJoumNNaf1-eYXQupi45Y5swhL34CgvUuOsvWVgIviLSbZlrnFmREmfAXXyq4kZPOxp9lUJWTz0cs89Q4c8XwCQXkjYb4KMjrP4UupQ3f_-o83ksiXHqjzPFZtp6MFZ40QH88u7Xp-Pn0tLG6pbct1fbUHHmaU6wEdPdzWKCZoXiuuj-M7UtOatV5Aq2TUH7KdkVYtSSjhs4UGYDjtYZbHSxi1xdL_iPB9hkk0u5PnFpxCV0SRe2IZ1R5qS94zVo2scswSs65XeDHBc88Gvi4M6Z4GCaY-yH11qNzk4-y2w0SMBNI6d7NIQjKokft8sMUnt9SxPs7bDvM4wH_2WE4dKWZcDmdaV-kc5vf-4T8v_K3EAFKH9gTaAUozJ1V8F9jNsKHb0eMREm8cXi9zyf6zXE4mjoBw5_C1IEcvb9f6CZs0AaGlvbj5gfLfDx85Qo0MQKWU9cyxShteQN5AWgd8df_10Wuh5zfkkcRy60aHHNVxnF_nP43NPisx3mudOggWUwSpCIrf0glRttOWIPCQlCrVARv9l3Iv3u1NNDgvyCFzIOuPDXvk6aNo6AbAY0akj1k_0tEBsfbB03Oz8WuvkK1fAmVXjFVa3tps9I0oqkwUJRJNmZLf_TKkzf7MvKo3dnKDdvc_uBmRDvlF_tfispNdWcdAPe4gCNvdZxStAFYuoc8wg5G6x0ipmnxgSVQ7_6B6lgKzdXsS74MunPaucKvkXEiTnVgll2n8s5mATqvQa95wdsvMp6VWYFTTIUW2Zlp5EHbyjy5wvHbI-CXhOWAlVlro5o4gPt-o1n_7bfJEI4byU_pehIPORYYoDzEOdUioCeq5j3h2-L2K6z2CNY-oW-VGLDAGm7V3xJeD39IoY8N6w6OIKQwQvyWz9Ybmz7MfLq14zrJ3sdStAq0XUoAg6TX9iiNO_A9BPKOdje87nwWIMJF7w.QkgvDHgp26SMB9xGa2Qg2A";
const outputDir = "public/illustrations/common";

const assets = [
  { name: 'cpu_chip.png', prompt: "A powerful 3D CPU chip with glowing golden circuits, representing low-level assembly and hardware, clean minimalist style, white background" },
  { name: 'system_call.png', prompt: "A 3D icon of a hand interacting with a glowing futuristic console, representing OS system calls, clean minimalist style, white background" },
  { name: 'terminal_command.png', prompt: "A sleek 3D terminal window with a prompt symbol >, representing shell commands, clean minimalist style, white background" },
  { name: 'variable_label.png', prompt: "A 3D glass box with a floating name tag attached, representing variable declaration, clean minimalist style, white background" },
  { name: 'passing_value.png', prompt: "A 3D funnel with data cubes falling through it, representing function arguments, clean minimalist style, white background" },
  { name: 'return_value.png', prompt: "A 3D arrow pointing out of a glowing box with a value inside, representing return results, clean minimalist style, white background" },
  { name: 'branching_paths.png', prompt: "A 3D signpost with multiple arrows pointing in different directions, representing branching logic, clean minimalist style, white background" },
  { name: 'loop_gears.png', prompt: "A pair of 3D interlocking gears in a circular motion, representing iterative loops, clean minimalist style, white background" },
  { name: 'class_building.png', prompt: "A 3D architectural model of a futuristic building, representing class structure, clean minimalist style, white background" },
  { name: 'data_storage.png', prompt: "A stack of 3D glowing storage disks, representing databases and persistence, clean minimalist style, white background" },
  { name: 'error_warning.png', prompt: "A 3D translucent red warning triangle with an exclamation mark, representing errors, clean minimalist style, white background" },
  { name: 'success_check.png', prompt: "A glossy 3D green check mark symbol, representing success and completion, clean minimalist style, white background" },
  { name: 'microchip_logic.png', prompt: "A small 3D microchip with logic gate symbols etched on top, representing bitwise logic, clean minimalist style, white background" },
  { name: 'puzzle_pieces.png', prompt: "Two 3D puzzle pieces perfectly fitting together, representing modularity and composition, clean minimalist style, white background" },
  { name: 'rocket_launch.png', prompt: "A sleek 3D rocket taking off with a trail of smoke, representing execution and starting, clean minimalist style, white background" },
  { name: 'stop_sign.png', prompt: "A stylish 3D octagonal stop sign, representing termination and exit, clean minimalist style, white background" },
  { name: 'input_keyboard.png', prompt: "A minimalist 3D keyboard with a single key being pressed, representing user input, clean minimalist style, white background" },
  { name: 'output_monitor.png', prompt: "A thin 3D monitor screen showing a simple line of code, representing display output, clean minimalist style, white background" },
  { name: 'clipboard_list.png', prompt: "A 3D clipboard with a list of items and check boxes, representing arrays and collections, clean minimalist style, white background" },
  { name: 'magnifying_glass_search.png', prompt: "A 3D magnifying glass hovering over a grid of data, representing searching, clean minimalist style, white background" },
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

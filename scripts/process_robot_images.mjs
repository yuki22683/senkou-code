import fs from 'fs';
import { execSync } from 'child_process';
import path from 'path';

const COOKIE = "eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..PiBypKYnNUnn4j3I.dubT0Bkl8oCHcPQtE3oX2AW1GWb1x8tR36kc0YcO9gzDySuqBv7eTcqIYkTJa7qGRqEaFydWDaT97zI0OyiJb0wDPuf2NeFp1MTUaWbd09q5cY_BODtiOT5dVBopR_U2GwvxGVNuhTzhTuSJHEGTfzPtRV6b8ZX4xZrsvz863URFEb5hLC0OhfS7cMtWzBT2T5j9tQwNJx41ITN46PVsRqI-fk3wzrApzMKqiOFzDT5CwwZJgZx5PEzKBuHpOO6na1UfozltsmbXERTN-Eep1HlA5156iuzjLkTWeK-E77DQ1YLEN0iq3XbqhegTNC-VDTlZcelWSiYMRk-Pj1arPGvr-hSkEFI2MhHA45w1Lpwcx79LH8l2BNRXDO-9mJjucALcY0Ky2qKojDKau5sK3VgtL4BGCI7WUyB1oRBuiRJREFe-qls23DiMrqVlGqgx80WvAoguUyE1KedGCs13KQhtm4qEDJyHLBzW_tDIdQWp1KSLjoAG4ZRdIr2zRrni5x0BQ-XyNVvEuStQPQ76eZdQ1qgAG1zOXeUdvJJ0ar8y7FUAT1UAVzV09hlZL6kiS5f_2mFLVf3OAH-fWt1E67YLfExTDHwIVyOEGS5w82tYKBRSSUVItC8mLuplUEApLWgrscZCciLnfbueHdjU5OMZQWSh3pAf0q6FDoAjWlrXqdy3y9HCLW7B8gtAieSjGaynZ4GJsy_YcnS1YqKtUer1epMMM6ZwxaRv0D3zXd_etYGqgUjTm-QrjDpktnWLHCUbeYjGa1to5KsrKtdsw8HTbr-2h0TzABkXkW_tFd7cM8lCkA1cpDl_hXP1dh1Z1pSyvjx0LgRItqS9zlLI-DsUzv_OIb68FFn2ekgEeAe1O42x_YsaF7FwDol2OWKp9Ivi3gVpKXqJGF1MVPbaQDBUEZetKinVpfxZVqFihd9rQVqy1oeFn6mgrfdU4_a-S5uHrdnWRQ7vkcbCv1Z_rQ.RxXSBxE1q-BheeeE07PLXw";
const STYLE = "Flat design, minimalist, pastel colors, friendly and modern illustration style for elementary school students, simple shapes, clean lines, soft gradients, playful but professional, white background";
const OUTPUT_DIR = "public/illustrations/3d";

const TASKS = [
  {
    file: "data/lessons/python5.ts",
    replacements: [
      {
        title: "with斁E��ファイルを開ぁE,
        prompt: `A friendly robot safely opening a folder or file cabinet with a key. The folder is glowing gently. ${STYLE}`,
        name: "python_with_statement"
      },
      {
        title: "1行ずつ読み込む",
        prompt: `A robot reading a long scroll of paper line by line with a magnifying glass. The scroll has simple text lines. ${STYLE}`,
        name: "python_read_lines"
      },
      {
        title: "json.loads()",
        prompt: `A robot taking a text block labeled 'JSON' and transforming it into a structured colorful puzzle block. ${STYLE}`,
        name: "python_json_loads"
      },
      {
        title: "json.dumps()",
        prompt: `A robot packing a colorful puzzle block or object into a neat box or text block labeled 'JSON'. ${STYLE}`,
        name: "python_json_dumps"
      },
      {
        title: "re.search()",
        prompt: `A robot using a magnifying glass to find a specific glowing pattern or shape hidden inside a text block. ${STYLE}`,
        name: "python_re_search"
      },
      {
        title: "re.findall()",
        prompt: `A robot collecting multiple matching glowing shapes or items from a text stream into a basket. ${STYLE}`,
        name: "python_re_findall"
      },
      {
        title: "Counterとは�E�E,
        prompt: `A robot counting colorful apples or simple items and arranging them in stacks. Numbers floating around. ${STYLE}`,
        name: "python_counter"
      },
      {
        title: "defaultdictとは�E�E,
        prompt: `A robot holding a dictionary book and handing out a default item (like a zero or empty box) to someone asking for a missing word. ${STYLE}`,
        name: "python_defaultdict"
      },
      {
        title: "itertools.chain()",
        prompt: `A robot connecting two separate colorful chains together into one long chain. ${STYLE}`,
        name: "python_itertools_chain"
      }
    ]
  },
  {
    file: "data/lessons/typescript4.ts",
    replacements: [
      {
        title: "型ガードとは�E�E,
        prompt: `A robot acting as a security guard, checking the shape of an object (circle vs square) to let it pass. ${STYLE}`,
        name: "ts_type_guard"
      },
      {
        title: "Exclude<T, U>",
        prompt: `A robot removing a specific colored block from a group of mixed blocks. ${STYLE}`,
        name: "ts_exclude"
      },
      {
        title: "Extract<T, U>",
        prompt: `A robot picking out only specific colored blocks from a group. ${STYLE}`,
        name: "ts_extract"
      },
      {
        title: "NonNullable<T>",
        prompt: `A robot removing 'null' or 'undefined' signs (ghosts) from a group of items, leaving only solid items. ${STYLE}`,
        name: "ts_non_nullable"
      },
      {
        title: "Parameters<T>",
        prompt: `A robot examining the input slot of a machine (function) to see what shape fits in. ${STYLE}`,
        name: "ts_parameters"
      },
      {
        title: "Awaited<T>",
        prompt: `A robot waiting for a gift box (Promise) to open and reveal the item inside. ${STYLE}`,
        name: "ts_awaited"
      },
      {
        title: "never型とは�E�E,
        prompt: `A robot facing a dead end or a blocked path, representing the 'never' type or unreachable code. ${STYLE}`,
        name: "ts_never_type"
      }
    ]
  }
];

function run() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  for (const task of TASKS) {
    console.log(`Processing ${task.file}...`);
    let content = fs.readFileSync(task.file, 'utf8');
    let changed = false;

    for (const rep of task.replacements) {
      console.log(`  Targeting slide: "${rep.title}"`);
      
      const escapedTitle = rep.title.replace(/[.*+?^${}()|[\\]/g, '\\$&');
      const regex = new RegExp(`("title":\s*"${escapedTitle}",\s*\n\s*)\


const TASKS = [
  {
    file: "data/lessons/python5.ts",
    replacements: [
      {
        title: "with文でファイルを開く",
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
        title: "Counterとは？",
        prompt: `A robot counting colorful apples or simple items and arranging them in stacks. Numbers floating around. ${STYLE}`,
        name: "python_counter"
      },
      {
        title: "defaultdictとは？",
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
        title: "型ガードとは？",
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
        title: "never型とは？",
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
-- Add necessary columns to the exercises table
ALTER TABLE exercises
ADD COLUMN IF NOT EXISTS language_id INTEGER NOT NULL DEFAULT 71,
ADD COLUMN IF NOT EXISTS file_extension TEXT NOT NULL DEFAULT 'py',
ADD COLUMN IF NOT EXISTS starter_code TEXT,
ADD COLUMN IF NOT EXISTS test_input TEXT,
ADD COLUMN IF NOT EXISTS expected_output TEXT;

-- Add index for performance
CREATE INDEX IF NOT EXISTS idx_exercises_language_id ON exercises(language_id);

-- Add comments for clarity
COMMENT ON COLUMN exercises.language_id IS 'Judge0 language ID';
COMMENT ON COLUMN exercises.file_extension IS 'File extension without dot (e.g., py, js, java)';
COMMENT ON COLUMN exercises.starter_code IS 'Initial code shown in editor';
COMMENT ON COLUMN exercises.test_input IS 'Input for code execution test';
COMMENT ON COLUMN exercises.expected_output IS 'Expected output for test validation';

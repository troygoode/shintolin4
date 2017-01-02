-- helpler functions

CREATE OR REPLACE FUNCTION as_character(charactername TEXT)
  RETURNS BOOLEAN AS $$
  BEGIN
    -- TODO
    SET SESSION "jwt.claims.is_system" = "FALSE";
    SET SESSION "jwt.claims.user_id" = "01b45a47-8294-460b-96f6-6d8fc7c9ecde";
    SET SESSION "jwt.claims.character_id" = "00000000-0000-0000-0000-000000000000";
    SET SESSION "jwt.claims.tile_id" = "00000000-0000-0000-0000-000000000000";
    SET SESSION "jwt.claims.settlement_id" = "00000000-0000-0000-0000-000000000000";
    RETURN TRUE;
  END;
  $$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION as_system()
  RETURNS BOOLEAN AS $$
  BEGIN
    SET SESSION "jwt.claims.is_system" = "TRUE";
    SET SESSION "jwt.claims.user_id" = "00000000-0000-0000-0000-000000000000";
    SET SESSION "jwt.claims.character_id" = "00000000-0000-0000-0000-000000000000";
    SET SESSION "jwt.claims.tile_id" = "00000000-0000-0000-0000-000000000000";
    SET SESSION "jwt.claims.settlement_id" = "00000000-0000-0000-0000-000000000000";
    RETURN TRUE;
  END;
  $$ LANGUAGE plpgsql;

-- # tiles

ALTER TABLE tiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY tiles_sec ON tiles
  USING (true)
  WITH CHECK (
    current_setting('jwt.claims.is_system') = 'TRUE'
  );

-- # tiles_items

ALTER TABLE tiles_items ENABLE ROW LEVEL SECURITY;
CREATE POLICY tiles_items_sec ON tiles_items
  USING (
    current_setting('jwt.claims.is_system') = 'TRUE'
    OR uuid(current_setting('jwt.claims.tile_id')) = tile_id
  );

-- # creatures

ALTER TABLE creatures ENABLE ROW LEVEL SECURITY;
CREATE POLICY creatures_sec ON creatures
  USING (
    current_setting('jwt.claims.is_system') = 'TRUE'
    OR uuid(current_setting('jwt.claims.tile_id')) = tile_id
  );

-- # users

ALTER TABLE users ENABLE ROW LEVEL SECURITY;
CREATE POLICY users_sec ON users
  USING (
    current_setting('jwt.claims.is_system') = 'TRUE'
    OR uuid(current_setting('jwt.claims.user_id')) = id
  );

-- # characters

ALTER TABLE characters ENABLE ROW LEVEL SECURITY;
CREATE POLICY characters_sec ON characters
  USING (true)
  WITH CHECK (
    current_setting('jwt.claims.is_system') = 'TRUE'
    OR uuid(current_setting('jwt.claims.character_id')) = id
  );

-- # users_characters

ALTER TABLE users_characters ENABLE ROW LEVEL SECURITY;
CREATE POLICY users_characters_sec ON users_characters
  USING (
    current_setting('jwt.claims.is_system') = 'TRUE'
    OR uuid(current_setting('jwt.claims.user_id')) = user_id
  );

-- # characters_skills

ALTER TABLE characters_skills ENABLE ROW LEVEL SECURITY;
CREATE POLICY characters_skills_sec ON characters_skills
  USING (
    current_setting('jwt.claims.is_system') = 'TRUE'
    OR uuid(current_setting('jwt.claims.character_id')) = character_id
  );

-- # characters_items

ALTER TABLE characters_items ENABLE ROW LEVEL SECURITY;
CREATE POLICY characters_items_sec ON characters_items
  USING (
    current_setting('jwt.claims.is_system') = 'TRUE'
    OR uuid(current_setting('jwt.claims.character_id')) = character_id
  );

-- # locations

ALTER TABLE locations ENABLE ROW LEVEL SECURITY;
CREATE POLICY locations_sec ON locations
  USING (
    current_setting('jwt.claims.is_system') = 'TRUE'
    OR uuid(current_setting('jwt.claims.character_id')) = character_id
    OR uuid(current_setting('jwt.claims.tile_id')) = tile_id
  );

-- # stats

ALTER TABLE stats ENABLE ROW LEVEL SECURITY;
CREATE POLICY stats_sec ON stats
  USING (
    current_setting('jwt.claims.is_system') = 'TRUE'
    OR uuid(current_setting('jwt.claims.character_id')) = character_id
  );

-- # settlements

ALTER TABLE settlements ENABLE ROW LEVEL SECURITY;
CREATE POLICY settlements_sec ON settlements
  USING (true)
  WITH CHECK (
    current_setting('jwt.claims.is_system') = 'TRUE'
    OR uuid(current_setting('jwt.claims.character_id')) = leader_id
  );

-- # profiles

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY profiles_sec ON profiles
  USING (true)
  WITH CHECK (
    current_setting('jwt.claims.is_system') = 'TRUE'
    OR uuid(current_setting('jwt.claims.character_id')) = character_id
  );

-- # hits

ALTER TABLE hits ENABLE ROW LEVEL SECURITY;
CREATE POLICY hits_sec ON hits
  USING (false);

-- # infos

ALTER TABLE infos ENABLE ROW LEVEL SECURITY;
CREATE POLICY infos_sec ON infos
  USING (
    current_setting('jwt.claims.is_system') = 'TRUE'
    OR uuid(current_setting('jwt.claims.character_id')) = character_id
  );

-- # messages

ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY messages_sec ON messages
  USING (
    current_setting('jwt.claims.is_system') = 'TRUE'
    OR uuid(current_setting('jwt.claims.character_id')) = character_id
    OR uuid(current_setting('jwt.claims.character_id')) = sender_id
  );

-- # broadcasts

ALTER TABLE broadcasts ENABLE ROW LEVEL SECURITY;
CREATE POLICY broadcasts_sec ON broadcasts
  USING (true);

-- # settlement_broadcasts

ALTER TABLE settlement_broadcasts ENABLE ROW LEVEL SECURITY;
CREATE POLICY settlement_broadcasts_sec ON settlement_broadcasts
  USING (
    current_setting('jwt.claims.is_system') = 'TRUE'
    OR uuid(current_setting('jwt.claims.settlement_id')) = settlement_id
  );

-- # alerts

ALTER TABLE alerts ENABLE ROW LEVEL SECURITY;
CREATE POLICY alerts_sec ON alerts
  USING (true);

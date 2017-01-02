-- helper UDFs

DROP FUNCTION as_character(TEXT);
DROP FUNCTION as_system();

-- tiles

DROP POLICY IF EXISTS tiles_sec ON tiles;
ALTER TABLE tiles DISABLE ROW LEVEL SECURITY;

-- tiles_items

DROP POLICY IF EXISTS tiles_items_sec ON tiles_items;
ALTER TABLE tiles_items DISABLE ROW LEVEL SECURITY;

-- creatures

DROP POLICY IF EXISTS creatures_sec ON creatures;
ALTER TABLE creatures DISABLE ROW LEVEL SECURITY;

-- users

DROP POLICY IF EXISTS users_sec ON users;
ALTER TABLE users DISABLE ROW LEVEL SECURITY;

-- characters

DROP POLICY IF EXISTS characters_sec ON characters;
ALTER TABLE characters DISABLE ROW LEVEL SECURITY;

-- users_characters

DROP POLICY IF EXISTS users_characters_sec ON users_characters;
ALTER TABLE users_characters DISABLE ROW LEVEL SECURITY;

-- characters_skills

DROP POLICY IF EXISTS characters_skills_sec ON characters_skills;
ALTER TABLE characters_skills DISABLE ROW LEVEL SECURITY;

-- characters_items

DROP POLICY IF EXISTS characters_items_sec ON characters_items;
ALTER TABLE characters_items DISABLE ROW LEVEL SECURITY;

-- locations

DROP POLICY IF EXISTS locations_sec ON locations;
ALTER TABLE locations DISABLE ROW LEVEL SECURITY;

-- stats

DROP POLICY IF EXISTS stats_sec ON stats;
ALTER TABLE stats DISABLE ROW LEVEL SECURITY;

-- settlements

DROP POLICY IF EXISTS settlements_sec ON settlements;
ALTER TABLE settlements DISABLE ROW LEVEL SECURITY;

-- profiles

DROP POLICY IF EXISTS profiles_sec ON profiles;
ALTER TABLE profiles DISABLE ROW LEVEL SECURITY;

-- hits

DROP POLICY IF EXISTS hits_sec ON hits;
ALTER TABLE hits DISABLE ROW LEVEL SECURITY;

-- infos

DROP POLICY IF EXISTS infos_sec ON infos;
ALTER TABLE infos DISABLE ROW LEVEL SECURITY;

-- messages

DROP POLICY IF EXISTS messages_sec ON messages;
ALTER TABLE messages DISABLE ROW LEVEL SECURITY;

-- broadcasts

DROP POLICY IF EXISTS broadcasts_sec ON broadcasts;
ALTER TABLE broadcasts DISABLE ROW LEVEL SECURITY;

-- settlement_broadcasts

DROP POLICY IF EXISTS settlement_broadcasts_sec ON settlement_broadcasts;
ALTER TABLE settlement_broadcasts DISABLE ROW LEVEL SECURITY;

-- alerts

DROP POLICY IF EXISTS alerts_sec ON alerts;
ALTER TABLE alerts DISABLE ROW LEVEL SECURITY;

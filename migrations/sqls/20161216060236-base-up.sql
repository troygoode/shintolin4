-- # EXTENSIONS

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- # COMMON FUNCTIONS

CREATE FUNCTION bump_updated_column ()
RETURNS TRIGGER
AS $script$
BEGIN
  NEW.updated_at = NOW()::TIMESTAMPTZ;
  RETURN NEW;
END
$script$ LANGUAGE plpgsql;

-- # TABLES

-- ## tiles

CREATE TABLE tiles (

  id UUID
    NOT NULL
    DEFAULT uuid_generate_v4()
    PRIMARY KEY,

  region TEXT,
    CHECK (region IS NULL OR CHAR_LENGTH(region) > 0),
  terrain TEXT
    CHECK (terrain IS NULL OR CHAR_LENGTH(terrain) > 0),
  building TEXT
    CHECK (building IS NULL OR (CHAR_LENGTH(building) > 0 AND building_hp IS NOT NULL AND building_hp > 0)),
  building_hp INTEGER,

  x INTEGER
    NOT NULL,
  y INTEGER
    NOT NULL,
  z INTEGER
    NOT NULL,

  searches INTEGER
    NOT NULL
    DEFAULT 0
    CHECK (searches >= 0),
  signage TEXT
    CHECK (signage IS NULL OR CHAR_LENGTH(signage) > 0)

);

CREATE UNIQUE INDEX tiles_coords_idx_unique ON tiles (x, y, z);

-- ## tiles_items

CREATE TABLE tiles_items (
  tile_id UUID
    NOT NULL
    REFERENCES tiles (id)
      ON UPDATE CASCADE
      ON DELETE CASCADE,

  item TEXT
    NOT NULL,
  quantity INTEGER
    NOT NULL
    CHECK (quantity > 0)
);

CREATE INDEX tiles_items_idx ON tiles_items (tile_id);
CREATE UNIQUE INDEX tiles_items_idx_unique ON tiles_items (tile_id, item);

-- ## creatures

CREATE TABLE creatures (

  id UUID
    NOT NULL
    DEFAULT uuid_generate_v4()
    PRIMARY KEY,
  tile_id UUID
    NOT NULL
    REFERENCES tiles (id)
      ON UPDATE CASCADE
      ON DELETE CASCADE,

  kind TEXT
    NOT NULL,
  hp INTEGER
    NOT NULL,
  hp_max INTEGER
    NOT NULL,

  created_at TIMESTAMPTZ
    NOT NULL
    DEFAULT NOW()::TIMESTAMPTZ,
  updated_at TIMESTAMPTZ
    NOT NULL
    DEFAULT NOW()::TIMESTAMPTZ
    CHECK (updated_at >= created_at)

);

CREATE INDEX creatures_tile_id_idx ON creatures (tile_id);

CREATE TRIGGER creatures_updated
  BEFORE UPDATE
  ON creatures
  FOR EACH ROW
  EXECUTE PROCEDURE bump_updated_column();

-- ## users

CREATE TABLE users (

  id UUID
    NOT NULL
    DEFAULT uuid_generate_v4()
    PRIMARY KEY,

  email TEXT
    NOT NULL
    CHECK (CHAR_LENGTH(email) > 0),
  password TEXT
    NOT NULL
    CHECK (CHAR_LENGTH(password) > 0),
  banned BOOLEAN
    NOT NULL
    DEFAULT FALSE,

  created_at TIMESTAMPTZ
    NOT NULL
    DEFAULT NOW()::TIMESTAMPTZ,
  updated_at TIMESTAMPTZ
    NOT NULL
    DEFAULT NOW()::TIMESTAMPTZ
    CHECK (updated_at >= created_at)

);

CREATE UNIQUE INDEX users_email_idx_unique ON users (LOWER(email));

CREATE TRIGGER users_updated
  BEFORE UPDATE
  ON users
  FOR EACH ROW
  EXECUTE PROCEDURE bump_updated_column();

-- ## characters

CREATE TABLE characters (

  id UUID
    NOT NULL
    DEFAULT uuid_generate_v4()
    PRIMARY KEY,

  name TEXT
    NOT NULL

);

CREATE UNIQUE INDEX characters_name_idx_unique ON characters (LOWER(name));

-- ## users_characters

CREATE TABLE users_characters (
  user_id UUID
    NOT NULL
    REFERENCES users (id)
      ON UPDATE CASCADE
      ON DELETE CASCADE,
  character_id UUID
    NOT NULL
    UNIQUE
    REFERENCES characters (id)
      ON UPDATE CASCADE
      ON DELETE CASCADE
);

CREATE INDEX users_characters_user_id_idx ON users_characters (user_id);

-- ## characters_skills

CREATE TABLE characters_skills (
  character_id UUID
    NOT NULL
    REFERENCES characters (id)
      ON UPDATE CASCADE
      ON DELETE CASCADE,

  skill TEXT
    NOT NULL
);

CREATE INDEX characters_skills_idx ON characters_skills (character_id);
CREATE UNIQUE INDEX characters_skills_idx_unique ON characters_skills (character_id, skill);

-- ## characters_items

CREATE TABLE characters_items (
  character_id UUID
    NOT NULL
    REFERENCES characters (id)
      ON UPDATE CASCADE
      ON DELETE CASCADE,

  item TEXT
    NOT NULL,
  quantity INTEGER
    NOT NULL
    CHECK (quantity > 0)
);

CREATE INDEX characters_items_idx ON characters_items (character_id);
CREATE UNIQUE INDEX characters_items_idx_unique ON characters_items (character_id, item);

-- ## locations

CREATE TABLE locations (
  character_id UUID
    NOT NULL
    UNIQUE
    REFERENCES characters (id)
      ON UPDATE CASCADE
      ON DELETE CASCADE,

  tile_id UUID
    NOT NULL
    REFERENCES tiles (id)
      ON UPDATE CASCADE
      ON DELETE CASCADE
);

CREATE INDEX locations_tile_idx ON locations (tile_id);

-- ## stats

CREATE TABLE stats (
  character_id UUID
    NOT NULL
    UNIQUE
    REFERENCES characters (id)
      ON UPDATE CASCADE
      ON DELETE CASCADE,

  hp INTEGER
    NOT NULL
    CHECK (hp >= 0 AND hp <= hp_max),
  hp_max INTEGER
    NOT NULL
    CHECK (hp_max >= hp),
  ap INTEGER
    NOT NULL
    CHECK (ap >= 0),
  survival INTEGER
    NOT NULL
    CHECK (survival >= 0),
  level INTEGER
    NOT NULL
    DEFAULT 1
    CHECK (level >= 1),
  xp_warrior INTEGER
    NOT NULL
    DEFAULT 0
    CHECK (xp_warrior >= 0),
  xp_crafter INTEGER
    NOT NULL
    DEFAULT 0
    CHECK (xp_crafter >= 0),
  xp_herbalist INTEGER
    NOT NULL
    DEFAULT 0
    CHECK (xp_herbalist >= 0),
  xp_wanderer INTEGER
    NOT NULL
    DEFAULT 0
    CHECK (xp_wanderer >= 0),

  updated_at TIMESTAMPTZ
    NOT NULL
    DEFAULT NOW()::TIMESTAMPTZ

);

CREATE TRIGGER stats_updated
  BEFORE UPDATE
  ON stats
  FOR EACH ROW
  EXECUTE PROCEDURE bump_updated_column();

-- ## settlements

CREATE TABLE settlements (

  id UUID
    NOT NULL
    DEFAULT uuid_generate_v4()
    PRIMARY KEY,

  name TEXT
    NOT NULL,
  motto TEXT
    NOT NULL,
  description TEXT
    NOT NULL,
  website_url TEXT
    NOT NULL,
  image_url TEXT
    NOT NULL,

  favor INTEGER
    NOT NULL
    DEFAULT 0
    CHECK (favor >= 0),
  is_open BOOLEAN
    NOT NULL,
  destroyed_at TIMESTAMPTZ
    CHECK (destroyed_at >= created_at),

  hq_id UUID
    NOT NULL
    REFERENCES tiles (id)
      ON UPDATE CASCADE
      ON DELETE CASCADE,
  founder_id UUID
    NOT NULL
    REFERENCES characters (id)
      ON UPDATE CASCADE
      ON DELETE CASCADE,
  leader_id UUID
    REFERENCES characters (id)
      ON UPDATE CASCADE
      ON DELETE SET NULL,
  destroyer_id UUID
    REFERENCES characters (id)
      ON UPDATE CASCADE
      ON DELETE SET NULL,

  created_at TIMESTAMPTZ
    NOT NULL
    DEFAULT NOW()::TIMESTAMPTZ,
  updated_at TIMESTAMPTZ
    NOT NULL
    DEFAULT NOW()::TIMESTAMPTZ
    CHECK (updated_at >= created_at)

);

CREATE UNIQUE INDEX settlements_name_idx_unique ON settlements (LOWER(name));

CREATE TRIGGER settlements_updated
  BEFORE UPDATE
  ON settlements
  FOR EACH ROW
  EXECUTE PROCEDURE bump_updated_column();

-- ## profiles

CREATE TABLE profiles (

  character_id UUID
    NOT NULL
    UNIQUE
    REFERENCES characters (id)
      ON UPDATE CASCADE
      ON DELETE CASCADE,

  bio TEXT
    NOT NULL,
  image_url TEXT
    NOT NULL,

  kills INTEGER
    NOT NULL
    DEFAULT 0
    CHECK (kills >= 0),
  frags INTEGER
    NOT NULL
    DEFAULT 0
    CHECK (frags >= 0),
  deaths INTEGER
    NOT NULL
    DEFAULT 0
    CHECK (deaths >= 0),
  revives INTEGER
    NOT NULL
    DEFAULT 0
    CHECK (revives >= 0),

  settlement_id UUID
    REFERENCES settlements (id)
      ON UPDATE CASCADE
      ON DELETE CASCADE,

  last_died_at TIMESTAMPTZ
    CHECK (last_died_at >= created_at),
  settlement_joined_at TIMESTAMPTZ
    CHECK (settlement_joined_at >= created_at),

  created_at TIMESTAMPTZ
    NOT NULL
    DEFAULT NOW()::TIMESTAMPTZ,
  updated_at TIMESTAMPTZ
    NOT NULL
    DEFAULT NOW()::TIMESTAMPTZ
    CHECK (updated_at >= created_at)

);

CREATE INDEX profiles_settlement_id_idx ON profiles (settlement_id);

CREATE TRIGGER profiles_updated
  BEFORE UPDATE
  ON profiles
  FOR EACH ROW
  EXECUTE PROCEDURE bump_updated_column();

-- ## hits

CREATE TABLE hits (

  id UUID
    NOT NULL
    DEFAULT uuid_generate_v4()
    PRIMARY KEY,

  ip TEXT
    NOT NULL,
  hitdate DATE
    NOT NULL,
  character_id UUID
    NOT NULL
    REFERENCES characters (id)
      ON UPDATE CASCADE
      ON DELETE CASCADE,
  counter INTEGER
    NOT NULL
    DEFAULT 1
    CHECK (counter >= 1),

  created_at TIMESTAMPTZ
    NOT NULL
    DEFAULT NOW()::TIMESTAMPTZ,
  updated_at TIMESTAMPTZ
    NOT NULL
    DEFAULT NOW()::TIMESTAMPTZ
    CHECK (updated_at >= created_at)

);

CREATE INDEX hits_character_id_idx ON hits (character_id);
CREATE INDEX hits_idx_unique ON hits (ip, character_id, hitdate);

-- ## infos

CREATE TABLE infos (

  id UUID
    NOT NULL
    DEFAULT uuid_generate_v4()
    PRIMARY KEY,

  sent_at TIMESTAMPTZ
    NOT NULL,
  character_id UUID
    NOT NULL
    REFERENCES characters (id)
      ON UPDATE CASCADE
      ON DELETE CASCADE,
  kind TEXT
    NOT NULL,
  data JSONB
    NOT NULL
    DEFAULT '{}'

);

CREATE INDEX infos_sent_at_idx ON infos (character_id, sent_at DESC);

-- ## messages

CREATE TABLE messages (

  id UUID
    NOT NULL
    DEFAULT uuid_generate_v4()
    PRIMARY KEY,

  sent_at TIMESTAMPTZ
    NOT NULL,
  character_id UUID
    NOT NULL
    REFERENCES characters (id)
      ON UPDATE CASCADE
      ON DELETE CASCADE,
  sender_id UUID
    NOT NULL
    REFERENCES characters (id)
      ON UPDATE CASCADE
      ON DELETE CASCADE,
  style TEXT
    NOT NULL,
  message TEXT
    NOT NULL

);

CREATE INDEX messages_received_at_idx ON messages (character_id, sent_at DESC);
CREATE INDEX messages_sent_at_idx ON messages (sender_id, sent_at DESC);

-- ## broadcasts

CREATE TABLE broadcasts (

  id UUID
    NOT NULL
    DEFAULT uuid_generate_v4()
    PRIMARY KEY,

  sent_at TIMESTAMPTZ
    NOT NULL,
  sender_id UUID
    NOT NULL
    REFERENCES characters (id)
      ON UPDATE CASCADE
      ON DELETE CASCADE,
  style TEXT
    NOT NULL,
  message TEXT
    NOT NULL

);

CREATE INDEX broadcasts_sent_at_idx ON broadcasts (sent_at DESC);

-- ## alerts

CREATE TABLE alerts (

  id UUID
    NOT NULL
    DEFAULT uuid_generate_v4()
    PRIMARY KEY,

  sent_at TIMESTAMPTZ
    NOT NULL,
  style TEXT
    NOT NULL,
  message TEXT
    NOT NULL

);

CREATE INDEX alerts_sent_at_idx ON alerts (sent_at DESC);

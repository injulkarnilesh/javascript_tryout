# Application
Trying out NodeJs application with ExpressJS.

Using Cassandra DB.


# Running
## Cassandra
Download and run cassandra locally.
Have table `users` under `injulkar`.
```
CREATE TABLE injulkar.users (
    state text,
    id uuid,
    age int,
    city text,
    first_name text,
    last_name text,
    PRIMARY KEY (state, id)
) WITH CLUSTERING ORDER BY (id ASC)
    AND bloom_filter_fp_chance = 0.01
    AND caching = {'keys': 'ALL', 'rows_per_partition': 'NONE'}
    AND comment = ''
    AND compaction = {'class': 'org.apache.cassandra.db.compaction.SizeTieredCompactionStrategy', 'max_threshold': '32', 'min_threshold': '4'}
    AND compression = {'chunk_length_in_kb': '64', 'class': 'org.apache.cassandra.io.compress.LZ4Compressor'}
    AND crc_check_chance = 1.0
    AND dclocal_read_repair_chance = 0.1
    AND default_time_to_live = 0
    AND gc_grace_seconds = 864000
    AND max_index_interval = 2048
    AND memtable_flush_period_in_ms = 0
    AND min_index_interval = 128
    AND read_repair_chance = 0.0
    AND speculative_retry = '99PERCENTILE';
```


## Node
### $npm install
to install node dependencies

### $node app.js
Run the application


# Links

http://localhost:9000/ Basic in-memory todo application


http://localhost:9000/users/ Basic CRUD of users from Cassandra database.
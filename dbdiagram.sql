Table users {
  id int [pk, increment]
  name varchar
  email varchar
  likes json
  profile_image varchar
  full_name varchar
  created_at datetime
  updated_at varchar
  deleted_at varchar
}

Table batches {
  id int [pk, increment]
  channels json
}

Table channels {
  id int [pk, increment]
  channels json
}
Table user_profiles {
  id int [pk, increment]
  user_profile_data json
  batch json
}

Table posts {
  id int [pk, increment]
  user_id int
  description varchar
  likes json
  image1 varchar
  image2 varchar
  image3 varchar
  tags array
  batch json
  is_public boolean
  created_at datetime
  updated_at varchar
  deleted_at varchar
}

Table post_details {
  id int [pk, increment]
}
Table comments {
  id int [pk, increment]
  user_id int
  post_id int
  likes json
  is_hidden boolean
  created_at datetime
  updated_at varchar
  deleted_at varchar
}

Table replies {
  id int [pk, increment]
  user_id int
  post_id int
  is_hidden boolean
  comment_id int
  created_at datetime
  updated_at varchar
  deleted_at varchar
}

Table casbin_rules {
  id int [pk, increment]
  ptype varchar
  v0 varchar
  v1 varchar
  v2 varchar
  v3 varchar
  v4 varchar
  v5 varchar
  created_at datetime
  updated_at varchar
  deleted_at varchar
}

Table tags {
  id int [pk, increment]
  tag_name varchar
  created_at datetime
  updated_at varchar
  deleted_at varchar
}

Table likes {
  id int [pk, increment]
  created_at datetime
  updated_at varchar
  deleted_at varchar
}


Ref: "channels"."channels" < "batches"."channels"

Ref: "users"."id" < "batches"."id"

Ref: "posts"."id" < "channels"."id"

Ref: "comments"."id" < "posts"."id"

Ref: "replies"."id" < "comments"."id"

Ref: "user_profiles"."id" < "users"."id"

Ref: "likes"."id" < "posts"."id"

Ref: "tags"."id" < "posts"."id"

Ref: "post_details"."id" < "posts"."id"
#!/bin/bash

if [ $# -eq 0 ]; then
  echo "No arguments supplied"
  exit 1
fi

for i in $(seq 0 4); do
  folder="ex$(printf '%s%02d' "$1" "$i")"
  mkdir -p "$folder"
done
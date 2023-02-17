#!/bin/bash

set -e

host="$1"
shift
cmd="$@"

until nc -z $host 6379; do
  echo "Waiting for Redis to become available..."
  sleep 1
done

echo "Redis is available, starting worker..."
exec $cmd

at-first:
	# you only need to type following command first time.
	# go mod init

start-db:
	docker-compose -f ./docker/docker-compose.postgres.yml up -d

end-db:
	docker-compose -f ./docker/docker-compose.postgres.yml down


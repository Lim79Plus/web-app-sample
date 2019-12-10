start-db:
	docker-compose -f docker-compose.postgres.yml up -d
	# access -> docker exec -it postgres-one psql -d app_db -U app_user

end-db:
	docker-compose -f docker-compose.postgres.yml down -v


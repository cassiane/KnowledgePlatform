package br.com.knowledge.platform.dao;

import org.springframework.data.repository.CrudRepository;

import br.com.knowledge.platform.modelo.Usuario;

public interface IUsuarioDao extends  CrudRepository<Usuario, Integer> {
	Usuario findByEmail(String email);
}

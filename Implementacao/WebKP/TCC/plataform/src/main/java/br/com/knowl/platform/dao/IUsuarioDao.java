package br.com.knowl.platform.dao;

import org.springframework.data.repository.CrudRepository;

import br.com.knowl.platform.modelo.Usuario;

public interface IUsuarioDao extends  CrudRepository<Usuario, Integer> {
	Usuario findByEmail(String email);
}

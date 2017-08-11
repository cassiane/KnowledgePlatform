package br.com.knowl.platform.dao;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Service;

import br.com.knowl.platform.modelo.Profissao;

@Service
public interface IProfissaoDao extends PagingAndSortingRepository<Profissao, Integer>{
	Profissao findById(int id);
	Profissao findByDescricao(String descricao);
}
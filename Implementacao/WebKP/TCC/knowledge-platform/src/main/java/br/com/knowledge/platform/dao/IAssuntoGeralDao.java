package br.com.knowledge.platform.dao;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Service;

import br.com.knowledge.platform.modelo.AssuntoGeral;

@Service
public interface IAssuntoGeralDao extends PagingAndSortingRepository<AssuntoGeral, Integer> {	
	AssuntoGeral findById(int id);
	Iterable<AssuntoGeral> findByDescricao(String descricao);	
}

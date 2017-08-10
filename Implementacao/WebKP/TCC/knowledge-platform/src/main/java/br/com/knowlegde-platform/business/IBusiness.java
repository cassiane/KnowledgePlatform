package br.com.knowl.platform.business;

import java.io.Serializable;

import br.com.knowl.platform.exception.BusinessException;

public interface IBusiness<T> extends Serializable {
	/**
	 * Assinatura padrão para os métodos Inserir/Alterar
	 * @param model - entidade a ser inserida/alterada
	 * @throws BusinessException
	 */
	void salvar(T model) throws BusinessException;
	
	/**
	 * Assinatura padrão para o método Excluir
	 * @param model - entidade a ser excluida
	 * @throws BusinessException
	 */
	void excluir(T model) throws BusinessException;
	
	/**
	 * Assinatura padrão para o que busca um registro pela PK
	 * @param model - entidade contendo a PK populada
	 * @throws BusinessException
	 */
	T obterPorId(T filtro);

	/**
	 * Assinatura padrão para o que pesquisa N registros
	 * de acordo com os filtros informados no <T> model
	 * @param model - entidade contendo a PK populada
	 * @throws BusinessException
	 */
	Iterable<T> pesquisar(T filtros);

}

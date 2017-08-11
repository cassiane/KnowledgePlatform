package br.com.knowledge.platform.business;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.knowledge.platform.dao.IAssuntoGeralDao;
import br.com.knowledge.platform.exception.BusinessException;
import br.com.knowledge.platform.modelo.AssuntoGeral;

@Service
public class AssuntoGeralBusiness implements IBusiness<AssuntoGeral>{

	/**
	 * 
	 */
	private static final long serialVersionUID = 3962378395611341862L;
	@Autowired
	private IAssuntoGeralDao dao;

	@Override
	public void salvar(AssuntoGeral model) throws BusinessException {
		dao.save(model);
		
	}

	@Override
	public void excluir(AssuntoGeral model) throws BusinessException {
		dao.delete(model);
		
	}

	@Override
	public AssuntoGeral obterPorId(AssuntoGeral filtro) {
		return dao.findOne(filtro.getIdAssuntoGeral());
	}

	@Override
	public Iterable<AssuntoGeral> pesquisar(AssuntoGeral filtros) {		
		return dao.findByDescricao(filtros.getDescricao());
	}

}
